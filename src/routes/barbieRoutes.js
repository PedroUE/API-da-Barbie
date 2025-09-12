import express from "express";
import { getAllBarbie, getBarbieById, createBarbie, deleteBarbie} from "../controller/barbieController.js";


const router = express.Router();

router.get("/", getAllBarbie);           
router.get("/:id", getBarbieById);
router.get("/", createBarbie);    
router.delete("/:id", deleteBarbie);


export default router;