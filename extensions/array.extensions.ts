declare global {
  interface Array<T> {
    first(): T | undefined;
    last(): T | undefined;
    isSorted(dir: "asc" | "desc"): boolean;
    minDiff(difference: number): boolean;
    maxDiff(difference: number): boolean;
  }
}

if (!Array.prototype.first) {
  Array.prototype.first = function () {
    return this[0];
  };
}

if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isSorted) {
  Array.prototype.isSorted = function (dir: "asc" | "desc") {
    const isNumbers = this.every((x) => typeof x === "number");

    if (!isNumbers) {
      throw new Error("Array is not of type number");
    }

    if (dir === "asc") {
      return this.every((_, i) => i === 0 || this[i] >= this[i - 1]);
    }

    if (dir === "desc") {
      return this.every((_, i) => i === 0 || this[i] <= this[i - 1]);
    }

    return false;
  };
}

if (!Array.prototype.minDiff) {
  Array.prototype.minDiff = function (difference: number) {
    const isNumbers = this.every((x) => typeof x === "number");

    if (!isNumbers) {
      throw new Error("Array is not of type number");
    }

    return this.every(
      (_, i) => i === 0 || Math.abs(this[i] - this[i - 1]) >= difference
    );
  };
}

if (!Array.prototype.maxDiff) {
  Array.prototype.maxDiff = function (difference: number) {
    const isNumbers = this.every((x) => typeof x === "number");

    if (!isNumbers) {
      throw new Error("Array is not of type number");
    }

    return this.every(
      (_, i) => i === 0 || Math.abs(this[i] - this[i - 1]) <= difference
    );
  };
}

export {};
