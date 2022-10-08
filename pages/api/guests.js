// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import docClient from '../../db.js'

export default async function handler(req, res) {
  const items = await scanItems()
  res.status(200).json(items)
}
 
function scanItems() {
  var params = {
      ExpressionAttributeValues: {
          ':entity': 'guest',        
      },        
      FilterExpression: 'entity = :entity',
      TableName: 'home-expenses'
  };

  const promise = new Promise((resolve, reject) => {
    docClient.scan(params, function(error, data) {
      if (error) {
        reject(error)
      }      
      resolve(data.Items)
    });
  })

  return promise
}