import NpcsModel from "../models/npcsModel.js";

class NpcsController {
  // GET /api/npcs
  async getAllNpcs(req, res) {
    try {
      const npcs = await NpcsModel.findAll();
      res.json(npcs);
    } catch (error) {
      console.error("Erro ao buscar npcs:", error);
      res.status(500).json({ error: "Erro ao buscar npcs" });
    }
  }

  // GET /api/npcs/:id
  async getNpcById(req, res) {
    try {
      const { id } = req.params;

      const npc = await NpcsModel.findById(id);

      if (!npc) {
        return res.status(404).json({ error: "NPC não encontrado" });
      }

      res.json(npc);
    } catch (error) {
      console.error("Erro ao buscar npc:", error);
      res.status(500).json({ error: "Erro ao buscar npc" });
    }
  }

  // POST /api/npcs
  async createNpc(req, res) {
    try {
      // Validação básica
      const {
        name,
        description,
        location,
        functionNpc,
        imageUrl
      } = req.body;

      // Verifica se todos os campos do npc foram fornecidos
      if (
        !name ||
        !description ||
        !location ||
        !functionNpc ||
        !imageUrl
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo npc
      const newNpc = await NpcsModel.create(
        name,
        description,
        location,
        functionNpc,
        imageUrl
      );

      if (!newNpc) {
        return res.status(400).json({ error: "Erro ao criar npc" });
      }

      res.status(201).json(newNpc);
    } catch (error) {
      console.error("Erro ao criar npc:", error);
      res.status(500).json({ error: "Erro ao criar npc" });
    }
  }

  // PUT /api/npcs/:id
  async updateNpc(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        location,
        functionNpc,
        imageUrl
      } = req.body;

      // Atualizar o npc
      const updatedNpc = await NpcsModel.update(
        id,
        name,
        description,
        location,
        functionNpc,
        imageUrl
      );

      if (!updatedNpc) {
        return res.status(404).json({ error: "NPC não encontrado" });
      }

      res.json(updatedNpc);
    } catch (error) {
      console.error("Erro ao atualizar npc:", error);
      res.status(500).json({ error: "Erro ao atualizar npc" });
    }
  }

  // DELETE /api/npcs/:id
  async deleteNpc(req, res) {
    try {
      const { id } = req.params;

      // Remover o npc
      const result = await NpcsModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "NPC não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover npc:", error);
      res.status(500).json({ error: "Erro ao remover npc" });
    }
  }
}

export default new NpcsController();
