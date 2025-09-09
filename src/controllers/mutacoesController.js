import MutacoesModel from "../models/mutacoesModel.js";

class MutacoesController {
  // GET /api/mutacoes
  async getAllMutacoes(req, res) {
    try {
      const mutacoes = await MutacoesModel.findAll();
      res.json(mutacoes);
    } catch (error) {
      console.error("Erro ao buscar mutações:", error);
      res.status(500).json({ error: "Erro ao buscar mutações" });
    }
  }

  // GET /api/mutacoes/:id
  async getMutacaoById(req, res) {
    try {
      const { id } = req.params;

      const mutacao = await MutacoesModel.findById(id);

      if (!mutacao) {
        return res.status(404).json({ error: "Mutação não encontrada" });
      }

      res.json(mutacao);
    } catch (error) {
      console.error("Erro ao buscar mutação:", error);
      res.status(500).json({ error: "Erro ao buscar mutação" });
    }
  }

  // POST /api/mutacoes
  async createMutacao(req, res) {
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

      // Verifica se todos os campos da mutação foram fornecidos
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

      // Criar a nova mutação
      const newMutacao = await MutacoesModel.create(
        name,
        description,
        howToGet,
        location,
        costOfCells,
        imageUrl
      );

      if (!newMutacao) {
        return res.status(400).json({ error: "Erro ao criar mutação" });
      }

      res.status(201).json(newMutacao);
    } catch (error) {
      console.error("Erro ao criar mutação:", error);
      res.status(500).json({ error: "Erro ao criar mutação" });
    }
  }

  // PUT /api/mutacoes/:id
  async updateMutacao(req, res) {
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

      // Atualizar a mutação
      const updatedMutacao = await MutacoesModel.update(
        id,
        name,
        description,
        howToGet,
        location,
        costOfCells,
        imageUrl
      );

      if (!updatedMutacao) {
        return res.status(404).json({ error: "Mutação não encontrado" });
      }

      res.json(updatedMutacao);
    } catch (error) {
      console.error("Erro ao atualizar mutação:", error);
      res.status(500).json({ error: "Erro ao atualizar mutação" });
    }
  }

  // DELETE /api/mutacoes/:id
  async deleteMutacao(req, res) {
    try {
      const { id } = req.params;

      // Remover a mutação
      const result = await MutacoesModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Mutação não encontrada" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover mutação:", error);
      res.status(500).json({ error: "Erro ao remover mutação" });
    }
  }
}

export default new MutacoesController();
