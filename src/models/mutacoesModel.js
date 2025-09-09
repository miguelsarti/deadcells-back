import prisma from "../../prisma/prisma.js";

class MutacoesModel {
  // Obter todas as mutações
  async findAll() {
    const mutacoes = await prisma.mutacao.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(mutacoes);

    return mutacoes;
  }

  // Obter uma mutacao pelo ID
  async findById(id) {
    const mutacao = await prisma.mutacao.findUnique({
      where: {
        id: Number(id),
      },
    });

    return mutacao;
  }

  // Criar uma nova mutação
  async create(
    name, 
    description,
    howToGet,
    location,
    costOfCells,
    imageUrl
  ) {
    const newMutacao = await prisma.mutacao.create({
      data: {
        name,
        description,
        howToGet,
        location,
        costOfCells,
        imageUrl
      },
    });

    return newMutacao;
  }

  // Atualizar uma mutação
  async update(
    id,
    name,
    description,
    howToGet,
    location,
    costOfCells,
    imageUrl
  ) {
    const mutacao = await this.findById(id);

    if (!mutacao) {
      return null;
    }

    // Atualize a mutação existente com os novos dados
    const data = {};
    if (name !== undefined) {
      data.name = name;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (howToGet !== undefined) {
      data.howToGet = howToGet;
    }
    if (location !== undefined) {
      data.location = location;
    }
    if (costOfCells !== undefined) {
      data.costOfCells = costOfCells;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }

    const mutacaoUpdated = await prisma.mutacao.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return mutacaoUpdated;
  }

  // Remover uma mutação
  async delete(id) {
    const mutacao = await this.findById(id);

    if (!mutacao) {
      return null;
    }

    await prisma.mutacao.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new MutacoesModel();
