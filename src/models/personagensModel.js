import prisma from "../../prisma/prisma.js";

class PersonagensModel {
  // Obter todos os personagens
  async findAll() {
    const personagens = await prisma.personagem.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include  : {
        npcs: true,
        inimigos: true,
        }
    });

  console.log(personagens);

  return personagens;
  }

  // Obter um personagem pelo ID
  async findById(id) {
    const personagem = await prisma.personagem.findUnique({
      where: {
        id: Number(id),
      },
    });

  return personagem;
  }

  // Criar um novo personagem
  async create(
    name,
  ) {
  const newPersonagem = await prisma.personagem.create({
    data: {
      name,
    },
  });

  return newPersonagem;
}

  // Atualizar um personagem
  async update(
  id,
  name,

) {
  const personagem = await this.findById(id);

  if (!personagem) {
    return null;
  }

  // Atualize o personagem existente com os novos dados
  const data = {};
  if (name !== undefined) {
    data.title = title;
  }

  const personagemUpdated = await prisma.personagem.update({
    where: {
      id: Number(id),
    },
    data,
  });

  return personagemUpdated;
}

  // Remover um personagem
  async delete (id) {
  const personagem = await this.findById(id);

  if (!personagem) {
    return null;
  }

  await prisma.personagem.delete({
    where: {
      id: Number(id),
    },
  });

  return true;
}
}

export default new PersonagensModel();
