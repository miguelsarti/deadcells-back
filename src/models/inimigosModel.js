import prisma from "../../prisma/prisma.js";

class InimigosModel {
  // Obter todos os inimigos
  async findAll() {
    const inimigos = await prisma.inimigo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(inimigos);

    return inimigos;
  }

  // Obter um inimgo pelo ID
  async findById(id) {
    const inimigo = await prisma.inimigo.findUnique({
      where: {
        id: Number(id),
      },
    });

    return inimigo;
  }

  // Criar um novo inimigo
  async create(
    name,
    description,
    location,
    drop,
    isBoss,
    imageUrl,
    personagemId
  ) {
  const newInimigo = await prisma.inimigo.create({
    data: {
    name,
    description,
    location,
    drop,
    isBoss,
    imageUrl,
    personagemId
    },
  });

  return newInimigo;
}

  // Atualizar um inimigo
  async update(
  id,
    name,
    description,
    location,
    drop,
    isBoss,
    imageUrl,
    personagemId
) {
  const inimigo = await this.findById(id);

  if (!inimigo) {
    return null;
  }

  // Atualize o inimigo existente com os novos dados
  const data = {};
  if (name !== undefined) {
    data.name = name;
  }
  if (description !== undefined) {
    data.description = description;
  }
  if (location !== undefined) {
    data.location = location;
  }
  if (drop !== undefined) {
    data.drop = drop;
  }
    if (isBoss !== undefined) {
    data.isBoss = isBoss;
  }
  if (imageUrl !== undefined) {
    data.imageUrl = imageUrl;
  }
    if (personagemId !== undefined) {
    data.personagemId = personagemId;
  }

  const inimigoUpdated = await prisma.inimigo.update({
    where: {
      id: Number(id),
    },
    data,
  });

  return inimigoUpdated;
}

  // Remover um inimigo
  async delete (id) {
  const inimigo = await this.findById(id);

  if (!inimigo) {
    return null;
  }

  await prisma.inimigo.delete({
    where: {
      id: Number(id),
    },
  });

  return true;
}
}

export default new InimigosModel();
