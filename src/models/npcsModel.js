import prisma from "../../prisma/prisma.js";

class NpcsModel {
  // Obter todos os npcs
  async findAll() {
    const npcs = await prisma.npc.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(npcs);

    return npcs;
  }

  // Obter um npc pelo ID
  async findById(id) {
    const npc = await prisma.npc.findUnique({
      where: {
        id: Number(id),
      },
    });

    return npc;
  }

  // Criar um novo npc
  async create(
    name,
    description,
    location,
    functionNpc,
    imageUrl,
    personagemId
  ) {
  const newNpc = await prisma.npc.create({
    data: {
      name,
      description,
      location,
      functionNpc,
      imageUrl,
      personagemId
    },
  });

  return newNpc;
}

  // Atualizar um npc
  async update(
  id,
  name,
  description,
  location,
  functionNpc,
  imageUrl,
  personagemId
) {
  const npc = await this.findById(id);

  if (!npc) {
    return null;
  }

  // Atualize o npc existente com os novos dados
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
  if (functionNpc !== undefined) {
    data.functionNpc = functionNpc;
  }
  if (imageUrl !== undefined) {
    data.imageUrl = imageUrl;
  }
    if (personagemId !== undefined) {
    data.personagemId = personagemId;
  }

  const npcUpdated = await prisma.npc.update({
    where: {
      id: Number(id),
    },
    data,
  });

  return npcUpdated;
}

  // Remover um npc
  async delete (id) {
  const npc = await this.findById(id);

  if (!npc) {
    return null;
  }

  await prisma.npc.delete({
    where: {
      id: Number(id),
    },
  });

  return true;
}
}

export default new NpcsModel();
