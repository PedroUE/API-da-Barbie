import express from "express";
import { getAllBarbies, getBarbieById, createBarbie, deleteBarbie} from "../controller/barbieController.js";


const router = express.Router();

router.get("/", getAllBarbies);           
router.get("/:id", getBarbieById);
router.get("/", createBarbie);    
router.delete("/:id", deleteBarbie);


export default router;