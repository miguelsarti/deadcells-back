import ArmasModel from "../models/armasModel.js";

class ArmasController {
  // GET /api/armas
  async getAllArmas(req, res) {
    try {
      const armas = await ArmasModel.findAll();
      res.json(armas);
    } catch (error) {
      console.error("Erro ao buscar armas:", error);
      res.status(500).json({ error: "Erro ao buscar armas" });
    }
  }

  // GET /api/armas/:id
  async getArmaById(req, res) {
    try {
      const { id } = req.params;

      const arma = await ArmasModel.findById(id);

      if (!arma) {
        return res.status(404).json({ error: "Arma não encontrada" });
      }

      res.json(arma);
    } catch (error) {
      console.error("Erro ao buscar arma:", error);
      res.status(500).json({ error: "Erro ao buscar arma" });
    }
  }

  // POST /api/armas
  async createArma(req, res) {
    try {
      // Validação básica
      const {
    name,
    description,
    location,
    typeOfWeapon,
    costOfCells,
    howToGet,
    imageUrl
      } = req.body;

      // Verifica se todos os campos da arma foram fornecidos
      if (
        !name ||
        !description ||
        !location ||
        !typeOfWeapon ||
        !costOfCells ||
        !howToGet ||
        !imageUrl
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar a nova arma
      const newArma = await ArmasModel.create(
        name,
        description,
        location,
        typeOfWeapon,
        costOfCells,
        howToGet,
        imageUrl
      );

      if (!newArma) {
        return res.status(400).json({ error: "Erro ao criar arma" });
      }

      res.status(201).json(newArma);
    } catch (error) {
      console.error("Erro ao criar arma:", error);
      res.status(500).json({ error: "Erro ao criar arma" });
    }
  }

  // PUT /api/armas/:id
  async updateArma(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        location,
        typeOfWeapon,
        costOfCells,
        howToGet,
        imageUrl
      } = req.body;

      // Atualizar a arma
      const updatedArma = await ArmasModel.update(
        id,
        name,
        description,
        location,
        typeOfWeapon,
        costOfCells,
        howToGet,
        imageUrl
      );

      if (!updatedArma) {
        return res.status(404).json({ error: "Arma não encontrada" });
      }

      res.json(updatedArma);
    } catch (error) {
      console.error("Erro ao atualizar arma:", error);
      res.status(500).json({ error: "Erro ao atualizar arma" });
    }
  }

  // DELETE /api/armas/:id
  async deleteArma(req, res) {
    try {
      const { id } = req.params;

      // Remover a arma
      const result = await ArmasModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Arma não encontrada" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover arma:", error);
      res.status(500).json({ error: "Erro ao remover arma" });
    }
  }
}

export default new ArmasController();
