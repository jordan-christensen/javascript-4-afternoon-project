// ========================

describe('Context', function () {
  describe('Problem 1', function () {
    describe('user', function () {
      it('exists', function () {
        expect(user).not.toBeNull();
      })
      it('has the required properties and methods', function () {
        expect(user.username).not.toBeNull();
        expect(user.email).not.toBeNull();
        expect(user.getUsername).not.toBeNull();
      })

      describe('getUsername', function () {
        it('returns the users username', function () {
          expect(user.getUsername()).toEqual(user.username)
        })
      })
    })
  })

  describe('Problem 2', function () {
    describe('animal1', function () {
      it('should exist', function () {
        expect(animal1).not.toBeNull()
      })
      it('should be an instance of Animal', function () {
        expect(animal1 instanceof Animal).toEqual(true)
      })
    })
  })

  describe('Problem 3', function () {
    describe('whoSaysHi', function () {
      it('should exist', function () {
        expect(whoSaysHi).not.toBeNull()
      })
      it('should have context of user', function () {
        expect(whoSaysHi('ALOHA')).toEqual('Scuba Steve says ALOHA')
      })
    })
  })

  describe('Problem 4', function () {
    describe('context1', function () {
      it('should exist', function () {
        expect(context1).not.toBeNull()
      })
      it('should reference the correct object', function () {
        let result = context1 == window || context1 == 'window'
        expect(result).toEqual(true)
      })
    })

    describe('context2', function () {
      it('should exist', function () {
        expect(context2).not.toBeNull()
      })
      it('should reference the correct object', function () {
        let result = context2 == product
        expect(result).toEqual(true)
      })
    })

    describe('context3', function () {
      it('should exist', function () {
        expect(context3).not.toBeNull()
      })
      it('should reference the correct object', function () {
        let result = context3 == vacation
        expect(result).toEqual(true)
      })
    })

    describe('context4', function () {
      it('should exist', function () {
        expect(context4).not.toBeNull()
      })
      it('should reference the correct object', function () {
        let result = context4 == family1
        expect(result).toEqual(true)
      })
    })
  })
})
