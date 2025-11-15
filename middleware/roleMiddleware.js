export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin" && req.user.role !== "super-admin") {
    return res
      .status(403)
      .json({ error: "Admin or Super Admin access required" });
  }
  next();
};

export const super_adminOnly = (req, res, next) => {
  if (req.user.role !== "super-admin") {
    return res.status(403).json({ error: "Super Admin access required" });
  }
  next();
};
