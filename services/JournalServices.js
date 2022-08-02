const Journal = require("../models/Journal");

class JournalServices {
  static async createJournal(data) {
    const journal = await Journal.create(data);

    return {
      title: journal?.title,
      content: journal?.content,
      mood: journal?.mood,
      creator: journal?.creator,
      createdAt: journal?.createdAt,
      updatedAt: journal?.updatedAt,
    };
  }

  static filterByUser(id, journals) {
    return journals.map((journal) => {
      return {
        ...journal,
        journals: journal.journals.filter((j) => j.creator == id),
      };
    });
  }

  static async removeJournal(journalId) {
    const journal = await Journal.findByIdAndDelete(journalId);
    return journal;
  }
}

module.exports = JournalServices;
