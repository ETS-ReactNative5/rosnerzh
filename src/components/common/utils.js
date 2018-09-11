/**
* Serelize obj to form data 
* @param obj{Object}
* @return res{FormData}
* @public
*/
export const serelize = obj => {
  const res = new FormData()
  Object.keys(obj).forEach(key => {
    res.append(key, obj[key])
  })
  return res
}