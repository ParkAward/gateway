import mqtt from "mqtt";

const Topic = "#";
const Broker_URL = "tcp://192.168.0.13";

const option = {
  clientId: config.mqtt_clientId,
  port: config.mqtt_port,
  //username: config.mqtt_user,
  //password: config.mqtt_passwd,
  keepalive: 60,
};
