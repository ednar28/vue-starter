#!/bin/bash
rm -rf README.md src/components/docs src/layouts/documentation src/views/documentation src/router/documentation
sed -i "/import { useDoc } from '\.\/docs'/d" src/components/index.ts
sed -i "/app.use(useDoc)/d" src/components/index.ts
sed -i "/import { documentationRoutes } from '\.\/documentation'/d" src/router/index.ts
sed -i "/\.\.\.documentationRoutes,/d" src/router/index.ts
