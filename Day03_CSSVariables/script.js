function changeEffect() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

let inputs = document.querySelectorAll('.options input');

inputs.forEach(input => input.addEventListener('change', changeEffect));
