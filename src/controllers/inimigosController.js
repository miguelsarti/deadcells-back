import InimigosModel from "../models/inimigosModel.js";

class InimigosController {
  // GET /api/inimigos
  async getAllInimigos(req, res) {
    try {
      const inimigos = await InimigosModel.findAll();
      res.json(inimigos);
    } catch (error) {
      console.error("Erro ao buscar inimgos:", error);
      res.status(500).json({ error: "Erro ao buscar inimigos" });
    }
  }

  // GET /api/inimigos/:id
  async getInimigoById(req, res) {
    try {
      const { id } = req.params;

      const inimigo = await InimigosModel.findById(id);

      if (!inimigo) {
        return res.status(404).json({ error: "Inimigo não encontrado" });
      }

      res.json(inimigo);
    } catch (error) {
      console.error("Erro ao buscar inimigo:", error);
      res.status(500).json({ error: "Erro ao buscar inimigo" });
    }
  }

  // POST /api/inimigos
  async createInimigos(req, res) {
    try {
      // Validação básica
      const {
    name,
    description,
    location,
    drop,
    isBoss,
    imageUrl,
    personagemId
      } = req.body;

      console.log("Name", name);
      console.log("Description", description);
      console.log("Location", location);
      console.log("Drop", drop);
      console.log("isBoss", isBoss);
      console.log("imageUrl", imageUrl);
      console.log("personagemId", personagemId);
      

      // Verifica se todos os campos do inimigo foram fornecidos
      if (
        !name ||
        !description ||
        !location ||
        !drop ||
        !imageUrl ||
        !personagemId
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo inimigo
      const newInimigo = await InimigosModel.create(
    name,
    description,
    location,
    drop,
    isBoss,
    imageUrl,
    personagemId
      );

      if (!newInimigo) {
        return res.status(400).json({ error: "Erro ao criar inimigo" });
      }

      res.status(201).json(newInimigo);
    } catch (error) {
      console.error("Erro ao criar inimigo:", error);
      res.status(500).json({ error: "Erro ao criar inimigo" });
    }
  }

  // PUT /api/inimigos/:id
  async updateInimigo(req, res) {
    try {
      const { id } = req.params;
      const {
    name,
    description,
    location,
    drop,
    isBoss,
    imageUrl,
    personagemId
      } = req.body;

      // Atualizar o inimigo
      const updatedInimigo = await InimigosModel.update(
        id,
    name,
    description,
    location,
    drop,
    isBoss,
    imageUrl,
    personagemId
      );

      if (!updatedInimigo) {
        return res.status(404).json({ error: "Inimigo não encontrado" });
      }

      res.json(updatedInimigo);
    } catch (error) {
      console.error("Erro ao atualizar inimigo:", error);
      res.status(500).json({ error: "Erro ao atualizar inimigo" });
    }
  }

  // DELETE /api/inimigos/:id
  async deleteInimigo(req, res) {
    try {
      const { id } = req.params;

      // Remover o inimigo
      const result = await InimigosModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Inimigo não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover inimigo:", error);
      res.status(500).json({ error: "Erro ao remover inimigo" });
    }
  }
}

export default new InimigosController();
