import userRoutes from "./routes/user-routes";
import businessRoutes from "./routes/business-routes";
import productRoutes from "./routes/product-routes";
import serviceRoutes from "./routes/service-routes";
import followRoutes from "./routes/follow-routes";

const router = [
  userRoutes,
  businessRoutes,
  productRoutes,
  serviceRoutes,
  followRoutes,
];

export default router;
