import { Router } from 'express';
import {
  getAdmins,
  inviteAdmin,
  updateAdminInformation,
  updateProfileAdmin,
  createAdmin,
  getAllActiveAdmins,
} from '@controllers/userController';
import { isSuperAdmin } from '@middlewares/onlySuperadmin';
// import { PrismaClient } from '@prisma/client';
import { needPermissions } from '@middlewares/needPermissions';

const router = Router();
// const prisma = new PrismaClient();

router.patch('/updateProfileAdmin', isSuperAdmin, updateProfileAdmin);
router.get('/admins', isSuperAdmin, getAdmins);
router.get('/getAdmins', isSuperAdmin, getAllActiveAdmins);
router.post('/newAdmin', inviteAdmin);
router.put('/updateProfile/newAdmin', updateAdminInformation);
router.post('/createAdmin', isSuperAdmin, createAdmin);

// router.post('/approveOrReject', approveOrReject);
// router.get('/:id/notification', getAllNotification);

export default router;
