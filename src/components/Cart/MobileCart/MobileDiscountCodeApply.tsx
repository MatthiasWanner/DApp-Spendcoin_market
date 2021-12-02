import React from 'react';

function MobileDiscountCodeApply(): JSX.Element {
  return (
    <form className="mt-10">
      <label
        htmlFor="discount-code-mobile"
        className="block text-sm font-medium text-gray-700"
      >
        Discount code
      </label>
      <div className="flex space-x-4 mt-1">
        <input
          type="text"
          id="discount-code-mobile"
          name="discount-code-mobile"
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Apply
        </button>
      </div>
    </form>
  );
}

export default MobileDiscountCodeApply;
