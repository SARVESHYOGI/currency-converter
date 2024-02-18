import { useState } from 'react'
import { InputBox } from './components'
import useCurrency from './hooks/usecurrency'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setForm] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setForm(to)
    setTo(form)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])

  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,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')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(amount)}
                amountDisable
                selectCurrency={from}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert{from.toUpperCase()}to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
