import ROIHistory from "../models/ROIHistory.js";

class ROIRepository {
  async create(payload, session = null) {
    const [roi] = await ROIHistory.create([payload], { session });

    return roi;
  }

  async exists(investmentId, date) {
    return ROIHistory.findOne({
      investment: investmentId,
      date,
    });
  }

  async getUserROIHistory(userId) {
    return ROIHistory.find({
      user: userId,
    })
      .populate("investment")
      .sort({ createdAt: -1 });
  }

  async getDailyEarnings(userId) {
    return ROIHistory.aggregate([
      {
        $match: {
          user: userId,
        },
      },
      {
        $group: {
          _id: "$date",
          amount: {
            $sum: "$roiAmount",
          },
        },
      },
    ]);
  }

  async getTotalROI(userId) {
    return ROIHistory.aggregate([
      {
        $match: {
          user: userId,
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$roiAmount",
          },
        },
      },
    ]);
  }

  async getMonthlyROI(userId) {
    return ROIHistory.aggregate([
      {
        $match: {
          user: userId,
        },
      },
      {
        $group: {
          _id: {
            year: {
              $year: "$date",
            },
            month: {
              $month: "$date",
            },
          },
          total: {
            $sum: "$roiAmount",
          },
        },
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1,
        },
      },
    ]);
  }
}

export default new ROIRepository();
