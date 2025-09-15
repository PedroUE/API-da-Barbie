import express from "express";
import { getAllBarbies, getBarbieById, createBarbies, deleteBarbie} from "../controller/barbieController.js";


const router = express.Router();

router.get("/", getAllBarbies);           
router.get("/:id", getBarbieById);
router.post("/", createBarbies);    
router.delete("/:id", deleteBarbie);


export default router;