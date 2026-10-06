export const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      error: {
        code: "VALIDATION_ERROR",
        message: "Datos inválidos",
        details: error.errors?.map((err) => ({
          field: err.path.join('.'),
          message: err.message
        })) || []
      }
    });
  }
};
