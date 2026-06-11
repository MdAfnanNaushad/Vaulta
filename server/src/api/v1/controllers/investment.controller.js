import investmentService from "../../../services/investment.service.js";

import ApiResponse from "../../../utils/ApiResponse.js";

class InvestmentController {
  async create(req, res) {
    const investment =
      await investmentService.createInvestment(
        req.user._id,
        req.body
      );

    return res.status(201).json(
      new ApiResponse(
        201,
        "Investment created",
        investment
      )
    );
  }

  async getAll(req, res) {
    const investments =
      await investmentService.getUserInvestments(
        req.user._id, req.user._id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Investments fetched",
        investments
      )
    );
  }

  async getOne(req, res) {
    const investment =
      await investmentService.getInvestment(
        req.params.id, req.user._id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Investment fetched",
        investment
      )
    );
  }

  async cancel(req, res) {
    const investment =
      await investmentService.cancelInvestment(
        req.params.id, req.user._id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Investment cancelled",
        investment
      )
    );
  }
}

export default new InvestmentController();