export const adminOnly = (req, res, next) => {
  if (req.user.role !== "super-admin" || req.user.role !== "admin") {
    return res
      .status(403)
      .json({ error: "Super Admin and Admin access required" });
  }
  next();
};

export const super_adminOnly = (req, res, next) => {
  if (req.user.role !== "super-admin") {
    return res.status(403).json({ error: "Super Admin access required" });
  }
  next();
};
