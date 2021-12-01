class Stack{
    constructor(){
        this.top = -1;
        this.items = {};
    }

    get peek(){
        return this.items[this.top];
    }

    push(value){
        this.top += 1;
        this.items[this.top] = value;
    }

    pop(){
        if (this.items.length == 0)
            return "Underflow";
            
        this.items[this.top] = '';
        this.top -= 1;
    }

}


describe('My Stack', () => {

    let stack;

    beforeAll(() => {
        stack = new Stack();
    })

    


    it('is created empty',() => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    })

    // it('can push to the top', () => {
    //     stack.push('Hello123');
    //     expect(stack.top).toBe(0);
    //     expect(stack.peek).toEqual('Hello123');
    // });

    it('can pop off', () => {
        stack.push('Hello123');
        expect(stack.top).toBe(0);
        expect(stack.peek).toEqual('Hello123');
        console.log('1st: ' , stack);
        stack.pop();
        expect(stack.top).toBe(-1);
        expect(stack.peek).toEqual();
        console.log('2nd:', stack)

    });
})