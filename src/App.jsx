// //7번째 시도
// import React, { useState, useEffect } from 'react';

// // 교통수단 카테고리 데이터
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 기타', defaultPrice: '', defaultTime: '' },
// ];

// function App() {
//   const [hourlyRate, setHourlyRate] = useState(10320);
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });
//   const [animate, setAnimate] = useState(false); // 애니메이션 상태

//   // 초기 로딩 시 애니메이션 트리거
//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   const handleInputChange = (setter, currentObj, field, value) => {
//     const newValue = value === '' ? '' : Number(value);
//     setter({ ...currentObj, [field]: newValue });
//   };

//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
//         time: selected.defaultTime === '' ? '' : selected.defaultTime
//       });
//     }
//   };

//   const safeHourlyRate = Number(hourlyRate) || 0;
//   const minuteValue = safeHourlyRate / 60;
  
//   const calculateTotalCost = (opt) => {
//     const price = Number(opt.price) || 0;
//     const time = Number(opt.time) || 0;
//     return price + (time * minuteValue);
//   };

//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);
//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   const priceA = Number(optionA.price) || 0;
//   const priceB = Number(optionB.price) || 0;
//   const timeA = Number(optionA.time) || 0;
//   const timeB = Number(optionB.time) || 0;

//   const priceDiff = Math.abs(priceA - priceB);
//   const timeDiff = Math.abs(timeA - timeB);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
//   const fasterOption = timeA < timeB ? optionA : optionB;
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     // ✨ 배경에 그라데이션 애니메이션 적용
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 font-sans text-slate-800">
//       <div className={`w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-700 ease-out transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
//         {/* 헤더: 모던한 다크 테마 */}
//         <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
//           <div className="relative z-10 flex justify-between items-end">
//             <div>
//               <h1 className="text-3xl font-black tracking-tight mb-2">아낌표! <span className="text-yellow-400">⚡</span></h1>
//               <p className="text-slate-400 text-sm font-medium">시간과 돈, 당신의 최적 선택은?</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 카드 */}
//           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex justify-between items-center mb-3">
//               <label className="font-bold text-blue-800 text-sm uppercase tracking-wider">💰 나의 시간 가치 (시급)</label>
//               <div className="flex items-center group">
//                 <span className="font-bold text-blue-400 mr-2 text-xl">₩</span>
//                 <input 
//                   type="number" 
//                   value={hourlyRate} 
//                   onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
//                   placeholder="0"
//                   className="bg-transparent text-3xl font-black text-blue-900 w-40 text-right focus:outline-none border-b-2 border-transparent group-hover:border-blue-300 transition-colors placeholder-blue-200"
//                 />
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-[10px] font-bold text-blue-600 bg-white/60 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
//                 ℹ️ 2026년 최저시급 기준: 10,320원
//               </span>
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 (카드 디자인 개선) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               { title: 'A. 선택지', state: optionA, setter: setOptionA, otherState: optionB, color: 'blue' },
//               { title: 'B. 선택지', state: optionB, setter: setOptionB, otherState: optionA, color: 'indigo' }
//             ].map((box, idx) => {
//               const isWalk = box.state.id === 'walk';
//               return (
//                 <div key={idx} className={`p-6 rounded-3xl border-2 ${idx === 0 ? 'border-blue-50 bg-blue-50/30' : 'border-indigo-50 bg-indigo-50/30'} hover:bg-white hover:border-transparent hover:shadow-xl transition-all duration-300 group`}>
//                   <div className="flex justify-between items-center mb-6">
//                     <span className={`text-xs font-black uppercase tracking-widest ${idx === 0 ? 'text-blue-400' : 'text-indigo-400'}`}>{box.title}</span>
//                     <select 
//                       className="text-sm font-bold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 outline-none cursor-pointer hover:bg-slate-50 transition-colors"
//                       value={box.state.id}
//                       onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                     >
//                       {TRANSPORT_OPTIONS.map(opt => {
//                         const isDisabled = box.otherState.id === 'walk' && opt.id === 'walk';
//                         return (
//                           <option key={opt.id} value={opt.id} disabled={isDisabled}>
//                             {opt.label} {isDisabled ? '(중복불가)' : ''}
//                           </option>
//                         );
//                       })}
//                     </select>
//                   </div>

//                   <div className="space-y-5">
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">비용 (원)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.price} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
//                         placeholder="0"
//                         disabled={isWalk}
//                         className={`w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 transition-all
//                           ${isWalk ? 'text-slate-300 cursor-not-allowed border-dashed' : 'focus:border-blue-500 text-slate-700'}`}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">소요 시간 (분)</label>
//                       <div className="relative">
//                         <input 
//                           type="number" 
//                           value={box.state.time} 
//                           onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
//                           placeholder="0"
//                           className="w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 focus:border-blue-500 text-slate-700 transition-all"
//                         />
//                         <span className="absolute right-0 bottom-2 text-xs font-bold text-slate-300">min</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-right">
//                     <span className="text-xs font-medium text-slate-400 mr-2">총 기회비용</span>
//                     <span className={`text-lg font-black ${idx === 0 ? 'text-blue-600' : 'text-indigo-600'}`}>
//                       {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3. 분석 결과 그래프 (애니메이션 적용) */}
//           <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500"></div>
//             <h3 className="text-sm font-black text-slate-800 mb-8 flex items-center gap-2">
//               <span className="text-lg">📊</span> 비용 구조 비교
//             </h3>
            
//             {[
//               { label: optionA.label, price: priceA, time: timeA, total: totalCostA, barColor: 'bg-blue-500', textColor: 'text-blue-500' },
//               { label: optionB.label, price: priceB, time: timeB, total: totalCostB, barColor: 'bg-indigo-500', textColor: 'text-indigo-500' }
//             ].map((opt, i) => (
//               <div key={i} className="mb-8 last:mb-0">
//                 <div className="flex justify-between text-xs mb-2 font-bold text-slate-500">
//                   <span>{opt.label}</span>
//                   <span className="text-slate-800">{Math.round(opt.total).toLocaleString()}원</span>
//                 </div>
//                 {/* 그래프 바 */}
//                 <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex relative shadow-inner">
//                   <div 
//                     style={{ width: animate ? `${(opt.price / maxCost) * 100}%` : '0%' }} 
//                     className={`h-full ${opt.barColor} transition-all duration-1000 ease-out shadow-md`}
//                   ></div>
//                   <div 
//                     style={{ width: animate ? `${((opt.time * minuteValue) / maxCost) * 100}%` : '0%' }} 
//                     className="h-full bg-red-400 transition-all duration-1000 ease-out delay-300 shadow-md opacity-80"
//                   ></div>
//                 </div>
//                 <div className="flex justify-between text-[10px] font-bold mt-2">
//                   <span className={opt.textColor}>💸 지출 {opt.price.toLocaleString()}</span>
//                   <span className="text-red-400">⏱️ 시간가치 {Math.round(opt.time * minuteValue).toLocaleString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 4. 최종 결론 (강조형 카드) */}
//           <div className="bg-slate-900 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden group">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
//             <div className="relative z-10">
//               <div className="text-3xl font-black text-white mb-2 drop-shadow-lg">
//                 <span className="text-yellow-400 underline decoration-4 decoration-yellow-400/30 underline-offset-4">{bestOption.label}</span> 선택!
//               </div>
              
//               <p className="text-slate-300 text-sm mb-6 font-medium">
//                 총 <span className="font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded text-base">{Math.round(difference).toLocaleString()}원</span> 더 이득을 볼 수 있어요!"
//               </p>

//               {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 1000 && (
//                 <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-xs text-slate-300 inline-block text-left mx-auto max-w-sm">
//                   <span className="flex items-center gap-2 font-bold text-yellow-200 mb-2 text-sm">
//                     <span>💡</span>의사결정 Tip
//                   </span>
//                   <p className="leading-relaxed">
//                     노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
//                     시간을 아끼기 위해 <span className="text-white font-bold border-b border-white/30 pb-0.5">{fasterOption.label}</span>을(를) 선택하는 것이 진짜 이득입니다.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// 8번째 시도
import React, { useState, useEffect } from 'react';

// 교통수단 카테고리 데이터
const TRANSPORT_OPTIONS = [
  { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
  { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
  { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
  { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
  { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
  { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
  { id: 'custom', label: '✏️ 기타', defaultPrice: '', defaultTime: '' },
];

function App() {
  const [hourlyRate, setHourlyRate] = useState(10320);
  const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
  const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });
  const [animate, setAnimate] = useState(false); // 애니메이션 상태

  // 초기 로딩 시 애니메이션 트리거
  useEffect(() => {
    setAnimate(true);
  }, []);

  // ✨ 수정됨: 음수 입력 방지 로직 추가
  const handleInputChange = (setter, currentObj, field, value) => {
    // 1. 빈 값(지우는 경우) 허용
    if (value === '') {
      setter({ ...currentObj, [field]: '' });
      return;
    }

    const numValue = Number(value);
    // 2. 0 이상인 경우에만 상태 업데이트 (음수 입력 차단)
    if (numValue >= 0) {
      setter({ ...currentObj, [field]: numValue });
    }
  };

  const handleCategoryChange = (setter, optionId) => {
    const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
    if (selected) {
      setter({ 
        ...selected, 
        price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
        time: selected.defaultTime === '' ? '' : selected.defaultTime
      });
    }
  };

  const safeHourlyRate = Number(hourlyRate) || 0;
  const minuteValue = safeHourlyRate / 60;
  
  const calculateTotalCost = (opt) => {
    const price = Number(opt.price) || 0;
    const time = Number(opt.time) || 0;
    return price + (time * minuteValue);
  };

  const totalCostA = calculateTotalCost(optionA);
  const totalCostB = calculateTotalCost(optionB);
  const difference = Math.abs(totalCostA - totalCostB);
  const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
  const priceA = Number(optionA.price) || 0;
  const priceB = Number(optionB.price) || 0;
  const timeA = Number(optionA.time) || 0;
  const timeB = Number(optionB.time) || 0;

  const priceDiff = Math.abs(priceA - priceB);
  const timeDiff = Math.abs(timeA - timeB);
  const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
  const fasterOption = timeA < timeB ? optionA : optionB;
  const maxCost = Math.max(totalCostA, totalCostB, 1);

  return (
    // ✨ 배경에 그라데이션 애니메이션 적용
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className={`w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-700 ease-out transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* 헤더: 모던한 다크 테마 */}
        <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
          <div className="relative z-10 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black tracking-tight mb-2">아낌표! <span className="text-yellow-400">⚡</span></h1>
              <p className="text-slate-400 text-sm font-medium">시간과 돈, 당신의 최적 선택은?</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          
          {/* 1. 시급 설정 카드 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-3">
              <label className="font-bold text-blue-800 text-sm uppercase tracking-wider">💰 나의 시간 가치 (시급)</label>
              <div className="flex items-center group">
                <span className="font-bold text-blue-400 mr-2 text-xl">₩</span>
                {/* ✨ 수정됨: 시급 입력란 음수 방지 */}
                <input 
                  type="number" 
                  value={hourlyRate} 
                  onChange={(e) => {
                    const val = e.target.value;
                    // 빈 값이거나 양수일 때만 업데이트
                    if (val === '' || Number(val) >= 0) {
                      setHourlyRate(val === '' ? '' : Number(val));
                    }
                  }}
                  placeholder="0"
                  className="bg-transparent text-3xl font-black text-blue-900 w-40 text-right focus:outline-none border-b-2 border-transparent group-hover:border-blue-300 transition-colors placeholder-blue-200"
                />
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-blue-600 bg-white/60 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                ℹ️ 2026년 최저시급 기준: 10,320원
              </span>
            </div>
          </div>

          {/* 2. 비교 옵션 입력 (카드 디자인 개선) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 
              { title: 'A. 선택지', state: optionA, setter: setOptionA, otherState: optionB, color: 'blue' },
              { title: 'B. 선택지', state: optionB, setter: setOptionB, otherState: optionA, color: 'indigo' }
            ].map((box, idx) => {
              const isWalk = box.state.id === 'walk';
              return (
                <div key={idx} className={`p-6 rounded-3xl border-2 ${idx === 0 ? 'border-blue-50 bg-blue-50/30' : 'border-indigo-50 bg-indigo-50/30'} hover:bg-white hover:border-transparent hover:shadow-xl transition-all duration-300 group`}>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-xs font-black uppercase tracking-widest ${idx === 0 ? 'text-blue-400' : 'text-indigo-400'}`}>{box.title}</span>
                    <select 
                      className="text-sm font-bold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 outline-none cursor-pointer hover:bg-slate-50 transition-colors"
                      value={box.state.id}
                      onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
                    >
                      {TRANSPORT_OPTIONS.map(opt => {
                        const isDisabled = box.otherState.id === 'walk' && opt.id === 'walk';
                        return (
                          <option key={opt.id} value={opt.id} disabled={isDisabled}>
                            {opt.label} {isDisabled ? '(중복불가)' : ''}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">비용 (원)</label>
                      <input 
                        type="number" 
                        value={box.state.price} 
                        onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
                        placeholder="0"
                        disabled={isWalk}
                        className={`w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 transition-all
                          ${isWalk ? 'text-slate-300 cursor-not-allowed border-dashed' : 'focus:border-blue-500 text-slate-700'}`}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">소요 시간 (분)</label>
                      <div className="relative">
                        <input 
                          type="number" 
                          value={box.state.time} 
                          onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
                          placeholder="0"
                          className="w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 focus:border-blue-500 text-slate-700 transition-all"
                        />
                        <span className="absolute right-0 bottom-2 text-xs font-bold text-slate-300">min</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-right">
                    <span className="text-xs font-medium text-slate-400 mr-2">총 기회비용</span>
                    <span className={`text-lg font-black ${idx === 0 ? 'text-blue-600' : 'text-indigo-600'}`}>
                      {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. 분석 결과 그래프 (애니메이션 적용) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500"></div>
            <h3 className="text-sm font-black text-slate-800 mb-8 flex items-center gap-2">
              <span className="text-lg">📊</span> 비용 구조 비교
            </h3>
            
            {[
              { label: optionA.label, price: priceA, time: timeA, total: totalCostA, barColor: 'bg-blue-500', textColor: 'text-blue-500' },
              { label: optionB.label, price: priceB, time: timeB, total: totalCostB, barColor: 'bg-indigo-500', textColor: 'text-indigo-500' }
            ].map((opt, i) => (
              <div key={i} className="mb-8 last:mb-0">
                <div className="flex justify-between text-xs mb-2 font-bold text-slate-500">
                  <span>{opt.label}</span>
                  <span className="text-slate-800">{Math.round(opt.total).toLocaleString()}원</span>
                </div>
                {/* 그래프 바 */}
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex relative shadow-inner">
                  <div 
                    style={{ width: animate ? `${(opt.price / maxCost) * 100}%` : '0%' }} 
                    className={`h-full ${opt.barColor} transition-all duration-1000 ease-out shadow-md`}
                  ></div>
                  <div 
                    style={{ width: animate ? `${((opt.time * minuteValue) / maxCost) * 100}%` : '0%' }} 
                    className="h-full bg-red-400 transition-all duration-1000 ease-out delay-300 shadow-md opacity-80"
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] font-bold mt-2">
                  <span className={opt.textColor}>💸 지출 {opt.price.toLocaleString()}</span>
                  <span className="text-red-400">⏱️ 시간가치 {Math.round(opt.time * minuteValue).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 4. 최종 결론 (강조형 카드) */}
          <div className="bg-slate-900 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-3xl font-black text-white mb-2 drop-shadow-lg">
                <span className="text-yellow-400 underline decoration-4 decoration-yellow-400/30 underline-offset-4">{bestOption.label}</span> 선택!
              </div>
              
              <p className="text-slate-300 text-sm mb-6 font-medium">
                총 <span className="font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded text-base">{Math.round(difference).toLocaleString()}원</span> 더 이득을 볼 수 있어요!
              </p>

              {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 1000 && (
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-xs text-slate-300 inline-block text-left mx-auto max-w-sm">
                  <span className="flex items-center gap-2 font-bold text-yellow-200 mb-2 text-sm">
                    <span>💡</span> 의사결정 Tip
                  </span>
                  <p className="leading-relaxed">
                    노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
                    시간을 아끼기 위해 <span className="text-white font-bold border-b border-white/30 pb-0.5">{fasterOption.label}</span>을(를) 선택하는 것이 진짜 이득입니다.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
