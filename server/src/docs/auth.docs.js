/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Register User
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: User registered
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Login User
 *     responses:
 *       200:
 *         description: Login successful
 */

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     tags:
 *       - Authentication
 *     summary: Get Profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile
 */
export {};