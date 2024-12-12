cd backend
mvn clean install
mvn clean package

cd ..
cd frontend
export NODE_OPTIONS=--openssl-legacy-provider
npm install
npm run build

docker-compose up --build &
