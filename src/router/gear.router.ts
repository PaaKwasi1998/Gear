import {Router} from 'express';
import { sample_gears} from '../data';
import asyncHandler from 'express-async-handler';
import { GearModel } from '../models/gear.model';
const router = Router();

router.get("/seed", asyncHandler(
 async (req, res) => {
    const gearsCount = await GearModel.countDocuments();
    if(gearsCount> 0){
      res.send("Seed is already done!");
      return;
    }

    await GearModel.create(sample_gears);
    res.send("Seed Is Done!");
}
))


router.get("/",asyncHandler(
  async (req, res) => {
    const gears = await GearModel.find();
      res.send(gears);
  }
))

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const gears = await GearModel.find({name: {$regex:searchRegex}})
    res.send(gears);
  }
))



router.get("/:gearId", asyncHandler(
  async (req, res) => {
    const gear = await GearModel.findById(req.params.gearId);
    res.send(gear);
  }
))


export default router;