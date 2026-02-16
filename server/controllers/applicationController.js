import Application from "../models/Application.js";
import protect from "../middleware/authMiddleware.js";


export const createApplication = async (req, res, next) => {
  try {
    const app = await Application.create({
    ...req.body,
    user: req.user._id
  });
    res.json(app);
  } catch (error) {
    console.error("Create Error:", error);
    res.status(500);
    next(error);
  }
};


export const getApplications = async (req, res) => {
  const apps = await Application.find({ user: req.user._id });
  res.json(apps);
};

export const updateApplication = async (req, res) => {
  const updated = await Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteApplication = async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
