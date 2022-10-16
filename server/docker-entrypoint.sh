# docker-entrypoint.sh for node.js
echo "**************** Execute Entrypoint Script ****************"


echo "wait db server"
dockerize -wait tcp://db:3306 -timeout 20s

echo "wait mosquitto"
dockerize -wait tcp://mosquitto:9001 -timeout 20s

echo "start node server"
nodemon index.js