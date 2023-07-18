


const validate = (fields) => {

  const VALIDATORS = {
    checked : checked
  }

  let total_errors = 0

  for (const name in fields) {

    let child = document.querySelector(`[name="${name}"]`)
    let validators = fields[name]

    if (child) {

      if (typeof validators === 'object') {
        if (Array.isArray(validators)) {
          
          for (const func of validators) { 
            let test_child_value = VALIDATORS[func](child)
            if (!test_child_value) total_errors++
          }

        } else {
          
          for (const func in validators) {
            let test_child_value = VALIDATORS[func](child, validators[func])
            if (!test_child_value) total_errors++
          }

        }
      }

    }

  }

  return total_errors == 0;

}
