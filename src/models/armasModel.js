import prisma from "../../prisma/prisma.js";

class ArmasModel {
  // Obter todas as armas
  async findAll() {
    const armas = await prisma.arma.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(armas);

    return armas;
  }

  // Obter uma arma pelo ID
  async findById(id) {
    const arma = await prisma.arma.findUnique({
      where: {
        id: Number(id),
      },
    });

    return arma;
  }

  // Criar uma nova arma
  async create(
    name,
    description,
    location,
    typeOfWeapon,
    costOfCells,
    howToGet,
    imageUrl
  ) {
    const newArma = await prisma.arma.create({
      data: {
        name,
        description,
        location,
        typeOfWeapon,
        costOfCells,
        howToGet,
        imageUrl
      },
    });

    return newArma;
  }

  // Atualizar uma arma
  async update(
    id,
    name, 
    description,
    location,
    typeOfWeapon,
    costOfCells,
    howToGet,
    imageUrl
  ) {
    const arma = await this.findById(id);

    if (!arma) {
      return null;
    }

    // Atualize a arma existente com os novos dados
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
    if (typeOfWeapon !== undefined) {
      data.typeOfWeapon = typeOfWeapon;
    }
    if (costOfCells !== undefined) {
      data.costOfCells = costOfCells;
    }
    if (howToGet !== undefined) {
      data.howToGet = howToGet;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }

    const armaUpdated = await prisma.arma.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return armaUpdated;
  }

  // Remover uma arma
  async delete(id) {
    const arma = await this.findById(id);

    if (!arma) {
      return null;
    }

    await prisma.arma.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new ArmasModel();
