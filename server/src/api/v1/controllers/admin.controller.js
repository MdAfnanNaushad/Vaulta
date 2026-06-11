import roiService from "../../../services/roi.service.js";
import investmentRepository from "../../../repositories/investment.repository.js";

class AdminController {
  async processROI(req, res) {
    const investments =
      await investmentRepository.getActiveInvestments();

    const result =
      await roiService.processMultipleInvestments(
        investments
      );

    return res.json({
      success: true,
      result,
    });
  }
}

export default new AdminController();