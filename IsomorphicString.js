/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const mapa = new Map();
    const mapb = new Map();

    for (let i = 0; i < s.length; i++) {
        if (mapa.has(s[i])) {
            if (mapa.get(s[i]) !== t[i]) {
                return false;
              }
          } else {
            
          }
      }
  };