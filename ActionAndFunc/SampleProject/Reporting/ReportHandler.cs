using System;

namespace SampleProject.Reporting
{
    public class ReportHandler
    {
        private readonly Action<Report> _handlerDelegate;
        private readonly Func<Report, bool> _handlerDelegateWithConfirmation;

        public ReportHandler(Action<Report> handlerDelegate)
        {
            _handlerDelegate = handlerDelegate;
        }

        public ReportHandler(Func<Report, bool> handlerDelegateWithConfirmation)
        {
            _handlerDelegateWithConfirmation = handlerDelegateWithConfirmation;
        }

        public void Handle(Report report)
        {
            if (_handlerDelegate != null)
                _handlerDelegate(report);
            else if (_handlerDelegateWithConfirmation != null)
            {
                bool wasSuccess = _handlerDelegateWithConfirmation.Invoke(report);
                if (!wasSuccess)
                    HandleReportError(report);
            }
            else
                throw new Exception("There is no handler initialized");
        }

        public static void HandleReportError(Report report)
        {
            string upsError = @"
   ___  _____    
 .'/,-Y'     '~-.  
 l.Y             ^.           
 /\               _\_      'Doh!'   
i            ___/'   '\ 
|          /'   '\   o !   
l         ]     o !__./   
 \ _  _    \.___./    '~\  
  X \/ \            ___./  
 ( \ ___.   _..--~~'   ~`-.  
  ` Z,--   /               \    
    \__.  (   /       ______) 
      \   l  /-----~~' /      -Row
       Y   \          / 
       |    'x______.^ 
       |           \    
       j            Y
";
            Console.WriteLine(upsError);
            Console.WriteLine("--------------------");
            Console.WriteLine($"Report: {report}");
            Console.ReadLine();
        }
    }
}
