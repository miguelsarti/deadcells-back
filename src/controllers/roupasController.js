import RoupasModel from "../models/roupasModel.js";

class RoupaController {
  // GET /api/roupas
  async getAllRoupas(req, res) {
    try {
      const roupas = await RoupasModel.findAll();
      res.json(roupas);
    } catch (error) {
      console.error("Erro ao buscar roupas:", error);
      res.status(500).json({ error: "Erro ao buscar roupas" });
    }
  }

  // GET /api/roupas/:id
  async getRoupaById(req, res) {
    try {
      const { id } = req.params;

      const roupa = await RoupasModel.findById(id);

      if (!roupa) {
        return res.status(404).json({ error: "Roupa não encontrada" });
      }

      res.json(roupa);
    } catch (error) {
      console.error("Erro ao buscar roupa:", error);
      res.status(500).json({ error: "Erro ao buscar roupa" });
    }
  }

  // POST /api/roupas
  async createRoupa(req, res) {
    try {
      // Validação básica
      const {
        name,
        description,
        howToGet,
        location,
        costOfCells,
        imageUrl
      } = req.body;

      // Verifica se todos os campos da roupa foram fornecidos
      if (
        !name ||
        !description ||
        !howToGet ||
        !location ||
        !costOfCells ||
        !imageUrl
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar a nova roupa
      const newRoupa = await RoupasModel.create(
        name,
        description,
        howToGet,
        location,
        costOfCells,
        imageUrl
      );

      if (!newRoupa) {
        return res.status(400).json({ error: "Erro ao criar roupa" });
      }

      res.status(201).json(newRoupa);
    } catch (error) {
      console.error("Erro ao criar roupa:", error);
      res.status(500).json({ error: "Erro ao criar roupa" });
    }
  }

  // PUT /api/roupas/:id
  async updateRoupa(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        howToGet,
        location,
        costOfCells,
        imageUrl
      } = req.body;

      // Atualizar a roupa
      const updatedRoupa = await RoupasModel.update(
        id,
        name,
        description,
        howToGet,
        location,
        costOfCells,
        imageUrl
      );

      if (!updatedRoupa) {
        return res.status(404).json({ error: "Roupa não encontrado" });
      }

      res.json(updatedRoupa);
    } catch (error) {
      console.error("Erro ao atualizar roupa:", error);
      res.status(500).json({ error: "Erro ao atualizar roupa" });
    }
  }

  // DELETE /api/roupas/:id
  async deleteRoupa(req, res) {
    try {
      const { id } = req.params;

      // Remover a roupa
      const result = await RoupasModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Roupa não encontrada" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover roupa:", error);
      res.status(500).json({ error: "Erro ao remover roupa" });
    }
  }
}

export default new RoupaController();
