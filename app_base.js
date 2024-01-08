let express = require("express");
let app = express();
let path = require('path');
const port = 3000;



/**settings**/
app.set('port', process.env.PORT || 3000);



/**db settings**/

/**middlewares**/



/**listening the Server**/
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
