const hijriFormatter = new Intl.DateTimeFormat('id-ID-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
});

const hijriShortFormatter = new Intl.DateTimeFormat('id-ID-u-ca-islamic', {
    day: 'numeric',
    month: 'short',
});

export function getHijriDate(date) {
    if (!date) return '';

    const value = date instanceof Date ? date : new Date(date);

    if (Number.isNaN(value.getTime())) return '';

    return hijriFormatter.format(value);
}

export function getHijriDateShort(date) {
    if (!date) return '';

    const value = date instanceof Date ? date : new Date(date);

    if (Number.isNaN(value.getTime())) return '';

    return hijriShortFormatter.format(value);
}
