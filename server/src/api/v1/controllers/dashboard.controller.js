import dashboardService from "../../../services/dashboard.service.js";

import ApiResponse from "../../../utils/ApiResponse.js";

class DashboardController {
  async dashboard(
    req,
    res
  ) {
    const data =
      await dashboardService.getDashboard(
        req.user._id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Dashboard fetched",
        data
      )
    );
  }
}

export default new DashboardController();