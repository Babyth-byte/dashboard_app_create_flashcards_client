// ここからコードを書いてください
export default function setupConverter() {
  const converterForm = document.querySelector('.converter-form');
  const converterInput = document.querySelector('.converter-input');
  const converterFrom = document.querySelector('.converter-from');
  const converterTo = document.querySelector('.converter-to');
  const converterResult = document.querySelector('.converter-result');
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 }
  ];
  lengthUnit.forEach((item) => {
    const optionFrom = document.createElement("option");
    optionFrom.textContent = item.name;
    optionFrom.value = item.base;
    converterFrom.appendChild(optionFrom);
    const optionTo = document.createElement("option");
    optionTo.textContent = item.name;
    optionTo.value = item.base;
    converterTo.appendChild(optionTo);
  });
  converterFrom.selectedIndex = 0;
  converterTo.selectedIndex = 1;
  function convert() {
    const inputValue = parseFloat(converterInput.value);
    const fromValue = parseFloat(converterFrom.value);
    const toValue = parseFloat(converterTo.value);
    if (isNaN(inputValue)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }
    const result = (inputValue * fromValue) / toValue;
    const formattedResult = result.toFixed(3);
    const selectedFrom = converterFrom.options[converterFrom.selectedIndex].textContent;
    const selectedTo = converterTo.options[converterTo.selectedIndex].textContent;
    converterResult.textContent = `${inputValue} ${selectedFrom} = ${formattedResult} ${selectedTo}`;
  }
  // const converterForm = document.querySelector('.converter-form');
  converterForm.addEventListener('input', () => {
    convert();
  })
  convert();
};

// 変換元 / 先の値取得を optionFrom / optionTo ではなく、converterFrom.value / converterTo.value に修正

// const converterFrom = document.querySelector('.converter-from');
// は、この <select class="converter-from"> を参照します。

// なので converterFrom.value は、その <select> で現在選ばれている <option> の value を返します。
// 実質的には「選択中 option の value」です。
// 一方、optionFrom / optionTo は forEach の中で作っている一時変数なので、convert() の中では本来使えません（スコープ外）。
// だから convert() 内では、毎回現在の選択状態を持っている converterFrom.value / converterTo.value を使うのが正しいです。


