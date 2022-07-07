export function fetchIP() {
    return fetch('https://api.ipify.org?format=json')
        .then(data => data.json())
}