import { Router } from "express";
import { createStudent, findAll, editarStudent, eliminarStudent, getStudent } from './controller'

const router = Router();

router.get("/", findAll);
router.post("/", createStudent);
router.get("/:id", getStudent);
router.put("/:id", editarStudent);
router.delete("/:id", eliminarStudent);

export default router;