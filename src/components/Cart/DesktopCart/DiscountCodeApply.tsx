import React from 'react';

function DiscountCodeApply() {
  return (
    <form>
      <label
        htmlFor="discount-code"
        className="block text-sm font-medium text-gray-700"
      >
        Discount code
      </label>
      <div className="flex space-x-4 mt-1">
        <input
          type="text"
          id="discount-code"
          name="discount-code"
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

export default DiscountCodeApply;
