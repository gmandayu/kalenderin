const hijriFormatter = new Intl.DateTimeFormat('id-ID-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
});

export function getHijriDate(date) {
    if (!date) return '';

    const value = date instanceof Date ? date : new Date(date);

    if (Number.isNaN(value.getTime())) return '';

    return hijriFormatter.format(value);
}
