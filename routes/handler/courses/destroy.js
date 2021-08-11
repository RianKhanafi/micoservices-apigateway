const apiAdapter = require("../../apiAdapter");

const { URL_SERVICES_COURSE } = process.env;

const api = apiAdapter(URL_SERVICES_COURSE);

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const courses = await api.delete(`/api/courses/${id}`);
    return res.json(courses.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "Services unavailable" });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
