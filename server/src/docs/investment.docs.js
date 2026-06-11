/**
 * @swagger
 * tags:
 *   name: Investments
 *   description: Investment APIs
 */

/**
 * @swagger
 * /investments:
 *   post:
 *     tags:
 *       - Investments
 *     summary: Create Investment
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Investment created
 */

/**
 * @swagger
 * /investments:
 *   get:
 *     tags:
 *       - Investments
 *     summary: Get User Investments
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of investments
 */

/**
 * @swagger
 * /investments/{id}:
 *   get:
 *     tags:
 *       - Investments
 *     summary: Get Single Investment
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Investment details
 */
export {};