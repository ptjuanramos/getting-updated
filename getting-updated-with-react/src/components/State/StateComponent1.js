import React from "react"

export class StateComponent1 extends React.Component  {

    constructor(props) {
        super(props);
        
        this.state = {
            isPrimeNumber: false,
            number: -1
        };

        this.primeInputRef = React.createRef();
    }

    HandleCheckPrimeNumberButton = (_) => {
        let inputValue = this.primeInputRef.current.value;
        
        this.setState({ 
            number: inputValue,
            isPrimeNumber: this.IsNumberPrime(inputValue) 
        });
    }

    IsNumberPrime(number) {
        let divisor = 2;

        while (number > divisor){
          if(number % divisor == 0){
           return false;
          }
          else
            divisor++;
        }

        return true;
    }

    render() {
        let primeNumberElement;
        const { isPrimeNumber, number } = this.state;

        //TODO - 
        if(number != -1)
            primeNumberElement = <p>The number {isPrimeNumber} { isPrimeNumber ? 'is a' : 'is not a'} prime number.</p>

        return (
            <div className="App">
                <p>Statefull component 1</p>
                <input type="number" ref={this.primeInputRef}></input>
                <button onClick={this.HandleCheckPrimeNumberButton}>Click to check if is a prime number </button>
                {primeNumberElement}
            </div>
        )
    }

}

