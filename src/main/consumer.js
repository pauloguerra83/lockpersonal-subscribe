const { Kafka } = require('kafkajs')
const config = require('./config')


const kafka = new Kafka({
    clientId: config.kafka.CLIENTID,
    brokers: config.kafka.BROKERS
  })
  
  const topicWords = config.kafka.TOPIC
  const consumer = kafka.consumer({
    groupId: config.kafka.GROUPID
  })

  consumer.connect()

  consumer.subscribe({ topic: topicWords })

  consumer.run({
		// this function is called every time the consumer gets a new message
		eachMessage: ({ message }) => {
			// here, we just log the message to the standard output
			console.log(`received message: ${message.value}`)
		},
	})

  async function handleMessage(message) {
 
    console.log({
      value: message.value.toString(),
    })
 }