import prisma from "../../prisma/prisma.js";

class RoupasModel {
  // Obter todas as roupas
  async findAll() {
    const roupas = await prisma.roupas.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(roupas);

    return roupas;
  }

  // Obter uma roupa pelo ID
  async findById(id) {
    const roupa = await prisma.roupas.findUnique({
      where: {
        id: Number(id),
      },
    });

    return roupa;
  }

  // Criar uma nova roupa
  async create(
    name,
    description,
    howToGet,
    location,
    costOfCells,
    imageUrl
  ) {
    const newRoupa = await prisma.roupas.create({
      data: {
        name,
        description,
        howToGet,
        location,
        costOfCells,
        imageUrl
      },
    });

    return newRoupa;
  }

  // Atualizar uma roupa
  async update(
    id,
    name,
    description,
    howToGet,
    location,
    costOfCells,
    imageUrl
  ) {
    const roupa = await this.findById(id);

    if (!roupa) {
      return null;
    }

    // Atualize a roupa existente com os novos dados
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

    const roupaUpdated = await prisma.roupas.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return roupaUpdated;
  }

  // Remover uma roupa
  async delete(id) {
    const roupa = await this.findById(id);

    if (!roupa) {
      return null;
    }

    await prisma.roupas.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new RoupasModel();
