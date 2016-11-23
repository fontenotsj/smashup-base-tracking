import { baseInfo } from '../app/base-info'

export class Any {

    public static randomString(length: number, chars = 'aA#!'): string {
        var mask = '';
        if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
        if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (chars.indexOf('#') > -1) mask += '0123456789';
        if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
        var result = '';
        for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
        return result;
    }

    public static alphaOnly(length: number): string {
        return this.randomString(length, 'aA');

    }

    public static alphaNumeric(length: number): string {
        return this.randomString(length, 'aA#');

    }

    public static alphaNumericSpecial(length: number): string {
        return this.randomString(length, 'aA#!');

    }

    public static int(min = 0, max = 1000): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public static base() {

        const tempScore = Any.int(0, 50);

        return {
            name: Any.alphaNumeric(5),
            currentScore: tempScore,
            scoreThreshold: Any.int(tempScore)
        };
    }



    public static bases(itemCount = 2) {
        let result: baseInfo[] = [];
        for (let i = 0; i < itemCount; i++) {
            result.push(Any.base());
        }
        return result;
    }

    public static scoredBase() {

        let x = Any.base();
        x.currentScore = x.scoreThreshold;
        return x;
    }

    public static unscoredBase() {

        let x = Any.base();
        x.scoreThreshold = x.currentScore + 1;
        return x;
    }

}